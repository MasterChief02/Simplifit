package com.simplifit.repository;

import com.simplifit.model.UserInfo;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository
public class UserJPARepositoryImpl extends SimpleJpaRepository<UserInfo, Integer> implements UserJPARepository {

    @PersistenceContext
    private EntityManager entityManager;

    public UserJPARepositoryImpl(EntityManager entityManager) {
        super(UserInfo.class, entityManager);
        this.entityManager = entityManager;
    }

    @Override
    public List<UserInfo> findAll() {
        return entityManager.createQuery("SELECT u FROM UserInfo u", UserInfo.class)
                            .getResultList();
    }

    // Delegate other methods to super implementations

    @Override
    public List<UserInfo> findAll(Sort sort) {
        return super.findAll(sort);
    }

    @Override
    public List<UserInfo> findAllById(Iterable<Integer> ids) {
        return super.findAllById(ids);
    }

    @Override
    public <S extends UserInfo> List<S> saveAll(Iterable<S> entities) {
        return super.saveAll(entities);
    }

    @Override
    public void flush() {
        super.flush();
    }

    @Override
    public <S extends UserInfo> S saveAndFlush(S entity) {
        return super.saveAndFlush(entity);
    }

    @Override
    public <S extends UserInfo> List<S> saveAllAndFlush(Iterable<S> entities) {
        return super.saveAllAndFlush(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<UserInfo> entities) {
        super.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> ids) {
        super.deleteAllByIdInBatch(ids);
    }

    @Override
    public void deleteAllInBatch() {
        super.deleteAllInBatch();
    }

    @Override
    public UserInfo getOne(Integer id) {
        return super.getOne(id);
    }

    @Override
    public UserInfo getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public UserInfo getReferenceById(Integer id) {
        return super.getReferenceById(id);
    }

    @Override
    public <S extends UserInfo> List<S> findAll(Example<S> example) {
        return super.findAll(example);
    }

    @Override
    public <S extends UserInfo> List<S> findAll(Example<S> example, Sort sort) {
        return super.findAll(example, sort);
    }

    @Override
    public Page<UserInfo> findAll(Pageable pageable) {
        return super.findAll(pageable);
    }

    @Override
    public <S extends UserInfo> S save(S entity) {
        return super.save(entity);
    }

    @Override
    public Optional<UserInfo> findById(Integer id) {
        return super.findById(id);
    }

    @Override
    public boolean existsById(Integer id) {
        return super.existsById(id);
    }

    @Override
    public long count() {
        return super.count();
    }

    @Override
    public void deleteById(Integer id) {
        super.deleteById(id);
    }

    @Override
    public void delete(UserInfo entity) {
        super.delete(entity);
    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> ids) {
        super.deleteAllById(ids);
    }

    @Override
    public void deleteAll(Iterable<? extends UserInfo> entities) {
        super.deleteAll(entities);
    }

    @Override
    public void deleteAll() {
        super.deleteAll();
    }

    @Override
    public <S extends UserInfo> Optional<S> findOne(Example<S> example) {
        return super.findOne(example);
    }

    @Override
    public <S extends UserInfo> Page<S> findAll(Example<S> example, Pageable pageable) {
        return super.findAll(example, pageable);
    }

    @Override
    public <S extends UserInfo> long count(Example<S> example) {
        return super.count(example);
    }

    @Override
    public <S extends UserInfo> boolean exists(Example<S> example) {
        return super.exists(example);
    }

    @Override
    public <S extends UserInfo, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return super.findBy(example, queryFunction);
    }
}
